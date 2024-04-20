import axios from 'axios';

const getBibleVerse = async () => {
   const urls = [
      'https://bible-api.com/john+3:16',
      'https://bible-api.com/romans+12:21',
      'https://bible-api.com/psalms+42:11',
      'https://bible-api.com/luke+15:3-7',
      'https://bible-api.com/1peter+5:6-7',
      'https://bible-api.com/john+16:33',
      'https://bible-api.com/mathew+11:28',
      'https://bible-api.com/mathew+7:7',
      'https://bible-api.com/psalms+37:5'
   ];

   try {
      // Seleccionar una url aleatoria desde la constante urls
      const randomIndex = Math.floor(Math.random() * urls.length);
      const randomUrl = urls[randomIndex];

      // Aqui se obtiene el versículo de la Biblia desde el api
      const response = await axios.get(randomUrl);
      return response.data;
   } catch (error) {
      console.error('Error fetching random Bible verse:', error);
      return null;
   }
};

export default getBibleVerse;
