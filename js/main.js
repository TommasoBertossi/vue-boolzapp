var DateTime = luxon.DateTime;

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContactIndex: 0,
      

      newMessage: {
        date: '...',
        messagge: '',
        status: 'sent',
      },
    };
},

computed: {
    activeContact() {
        const activeContact = this.contacts[this.activeContactIndex];
        return activeContact;
    },
},

methods: {
    setActiveContactIndex(index) {
        this.activeContactIndex = index;
    },
    
    sendNewMessage() {
        const newMessageStatic = {...this.newMessage };
        this.contacts[this.activeContactIndex].messages.push(newMessageStatic);
        this.newMessage.message = '';

        // setTimeout(() => {
        //     const newAnswer = {
        //         date: '...',
        //         messagge: 'ok',
        //         status: 'received',
        //     }

        //     this.activeContact.messages.push(newAnswer);

        // }, 1000);

        timeToText(timestring) {
            return
        }
    },
},

}).mount('#app');

