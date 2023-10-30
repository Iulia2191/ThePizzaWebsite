

function List() {
    const data = [
      { id:1,
        img: "..img/salami.jpg",
        title: 'Marinara',
        ingredients:'Fructige Tomatensauce, Oregano, Knoblauch, Basilikum',
        allergens: 'A',
        spicy: false,
        price:'8 €'
      },
      { id:2,
        img: "..img/salami.jpg",
        title: 'Margherita',
        ingredients:'Fructige Tomatensauce, Parmigiano, Basilikum, Fiori Di Latte, Olivenöl',
        allergens: 'A, G',
        spicy: false,
        price:'10 €'
      },
      { id:3,
        img: "..img/salami.jpg",
        title: 'Neapolitana',
        ingredients:'Fructige Tomatensauce, Parmigiano, Fiori Di Latte, Zwibel, Kapern, Sardellen',
        allergens: 'A, G, D',
        spicy: false,
        price:'11 €'
      },
      { id:4,
        img: "..img/salami.jpg",
        title: 'Salami',
        ingredients:'Fructige Tomatensauce, Parmigiano, Fiori Di Latte, Salami , Basilicum',
        allergens: 'A, G',
        spicy: false,
        price:'11 €'
      },
      { id:5,
        img: "..img/salami.jpg",
        title: 'Salami Picante',
        ingredients:'Fructige Tomatensauce, Basilikum, Parmigiano, Fiori Di Latte, Pikante Salami Calabrese, Zwibel, Scharfe Pfefferoni, Knoblauchöl',
        allergens: 'A, G',
        spicy: true,
        price:'12 €'
      },
      { id:6,
        img: "..img/salami.jpg",
        title: 'Prosciutto E Funghi',
        ingredients:'Fructige Tomatensauce, Basilikum, Parmigiano, Fiori Di Latte, Schinken, Champignons',
        allergens: 'A',
        spicy: false,
        price:'12 €'
      },
      { id:7,
        img: "..img/salami.jpg",
        title: 'Prosciutto e Salami',
        ingredients:'Fructige Tomatensauce, Fiori Di Latte, Parmigiano, Schinken, Salami, Zwibel, Basilikum, Knoblauchöl',
        allergens: 'A, G',
        spicy: false,
        price:'12 €'
      },
      { id:8,
        img: "..img/salami.jpg",
        title: 'Prosciutto Crudo',
        ingredients:'Fructige Tomatensauce,Basilikum, Parmigiano, Fiori Di Latte, Prosciutto Crudo, Rucola, Crema Di Balsamico',
        allergens: 'A, G',
        spicy: false,
        price:'14 €'
      },
      { id:9,
        img: "..img/salami.jpg",
        title: 'Verdure',
        ingredients:'Fructige Tomatensauce, Fiori Di Latte, Parmigiano, Geröstete Paprika, Zwibel, Champignons, Oliven, Melanzani, Mais, Knoblauchöl',
        allergens: 'A, G',
        spicy: false,
        price:'12 €'
      },
      { id:10,
        img: "..img/salami.jpg",
        title: 'Champignons',
        ingredients:'Fructige Tomatensauce, Fiori Di Latte, Parmigiano, Champignons, Knoblauchöl',
        allergens: 'A, G',
        spicy: false,
        price:'11 €',
        isNew: true,
      },
    ]
  return (
    <div>List</div>
  )
}

export default List