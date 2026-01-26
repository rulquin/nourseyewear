import { createClient } from 'contentful';

const client = createClient({
  space: 'xtjw0gbt2tmi',
  accessToken: 'wepYbMXIsVx90LKn-ADfTH-GeoSl9u7RpUOUekZ5PUI',
});

// Helper function to determine if a field is rich text
const isRichTextField = (field) => {
  return field && typeof field === 'object' && 'nodeType' in field;
};

export const getEyewears = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'eyewears',
      limit: 6,
    });
    
    return response.items.map(item => ({
      id: item.sys.id,
      name: item.fields.name || '',
      // Keep description as raw data (can be string or rich text document)
      description: item.fields.description || '',
      // Keep richDescription if it exists (for rich text fields)
      richDescription: item.fields.description && isRichTextField(item.fields.description) 
        ? item.fields.description 
        : null,
      price: item.fields.price || 0,
      image: item.fields.image,
      color: item.fields.color || '',
      style: item.fields.style || '',
    }));
  } catch (error) {
    console.error('Error fetching eyewears from Contentful:', error);
    return [];
  }
};
