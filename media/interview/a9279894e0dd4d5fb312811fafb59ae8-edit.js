const axios = require('axios');

const editMessageGreen = async (idInstance, token, chatId, idMessage, text) => {
  try {
    const resp = await axios({
      method: 'POST',
      url: `https://api.greenapi.com/waInstance${idInstance}/editMessage/${token}`,
      data: {
        chatId: `${chatId}@c.us`,
        idMessage: idMessage,
        message: text
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response:', resp.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

// Setting up idinstance token chat idmessage text parameters:
editMessageGreen('123456789', 'abc123token', '79991234567', 'ABCD12345', 'Новое сообщение');
