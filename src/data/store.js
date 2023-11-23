import { reactive } from "vue";

export const store = reactive({

    cardEl : [
        {            
            img: "images/assets/healthy-foods.webp",
            title: "The Best Healthy Foods ",
            date: "December 26, 2022" ,            
            categories:{
              info1:"food",
            }
            
             
                 
        },
        {       
            img: "images/assets/winter.webp",
            title: "The Best Winter Outfits",
            date: "December 26, 2022",
            categories:{
              info1:"fashion",
            }  
        },
        {      
            img: "images/assets/photographers-mistakes.webp",
            title: "The Biggest Photographer mistakes",
            date: "December 26, 2022",
            categories:{
              info1:"Fashion",
            }  
        },
        {      
            img: "images/assets/photographers-mistakes.webp",
            title: "Reason to Visit France",
            date: "December 26, 2022",
            categories:{
              info1:"Culture", 
              info2:"Stories"}
        },
        {      
            img: "images/assets/travel-alone.webp",
            title: "Traveling Alone Is Awesome",
            date: "December 26, 2022",
            categories:['Lifestyle', 'Travel']  
        },
        {      
            img: "images/assets/travel-alone.webp",
            title: "Traveling Alone Is Awesome",
            date: "December 26, 2022",
            categories:['Culture', 'Stories']  

        },
        {      
            img: "images/assets/travel-alone.webp",
            title: "Traveling Alone Is Awesome",
            date: "December 26, 2022",
            categories:['Lifestyle', 'Stories', 'Travel']  
        },
        {      
          img: "images/assets/travel-alone.webp",
          title: "Traveling Alone Is Awesome",
          date: "December 26, 2022",
          categories:['Culture', 'Lifestyle']  
      },
      {      
        img: "images/assets/travel-alone.webp",
        title: "Traveling Alone Is Awesome",
        date: "December 26, 2022",
        categories:['Fashion', 'Lifestyle']  
    },
           
      ],

    videoEl: [
      {
        link: "https://www.youtube.com/embed/ICt1jYfucec?si=ZnNLazoM6rPviGvX",
        text:"Sword of The Stranger Fight Scene"
      },
      {
        link: "https://www.youtube.com/embed/zlwQERpksnw?si=QJplYSf8_3sSCJmQ",
        text:"Sun's Put, Guns Out"
      },
      {
        link: "https://www.youtube.com/embed/itQnUDMMhaU?si=bEF2MqwMHtnxo5yo",
        text:"Top 10 Vinland Saga Moments"
      },
      {
        link: "https://www.youtube.com/embed/IrU2dklT11s?si=_XgoYq4_YwRcSQRC",
        text:"Everytime Sukuna Appears"
      },
      {
        link: "https://www.youtube.com/embed/H5qupR6YQpQ?si=s2a6wJkd1IDs0AA7",
        text:"Wizard King (Julius) Vs Licht (Patri) Full Fight"
      },
      {
        link: "https://www.youtube.com/embed/CkC5CtabT1Y?si=eijE_sf1hGvdGni2",
        text:"Konan arranges 600 bilion explosive charms to defeat Uchiha Madara"
      },
      
    ]

});