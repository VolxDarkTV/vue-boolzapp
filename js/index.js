var DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
  data() {
    return {
        active: 0,
        newMessage: '',
        // error: false,
        newDate: '',
        me:{
            name: 'Vincenzo',
            avatar: 'imgs/avatar_io.jpg',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'imgs/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: 'imgs/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: 'imgs/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'imgs/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'imgs/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Claudia',
                avatar: 'imgs/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Federico',
                avatar: 'imgs/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Davide',
                avatar: 'imgs/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    },
                ],
            }
        ],

        searchContact: '',

    }
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(p => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.searchContact.toLowerCase()) != -1;
      });
    }
  },
  methods:{
    
        chatSelect (index) {    
            let x = index;
            this.active = x;
        },
        addMessage(){
            // Doppio == non ===
            if(this.newMessage.length == ''){
                // this.error = true;
            }else{
                // this.error = false;
                // creare una costante per aggiungere la data odierna
                let timeInThisMoment = DateTime.now().toLocaleString({day: 'numeric', month: 'long', year: '2-digit', hour: 'numeric', minute: '2-digit'});;
                const obj = {
                    // 1.richiamo la stringa vuota che andrò a riempire nell'input
                    // 2.Aggiungo lo status per far capire che è un mio msg
                    // 3.Aggiungo la data
                    message: this.newMessage,
                    status: 'sent',
                    date: timeInThisMoment,
                };
                // Immetto la stringa vuota collegata all'input, lo status e la data nei messsages
                this.filteredContacts[this.active].messages.push(obj);
                this.newMessage='';
            }
        },
        search(){
            const obj = {
                name: this.searchContact
            };

        },
    }
  
}).mount('#app')