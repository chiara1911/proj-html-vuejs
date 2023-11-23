import { reactive } from "vue";

export const store = reactive({
  cardEl: [
    {
      img: "images/assets/healthy-foods.webp",
      title: "The Best Healthy Foods ",
      date: "December 26, 2022",
      categories: {
        info: "food",
      },
    },
    {
      img: "images/assets/winter.webp",
      title: "The Best Winter Outfits",
      date: "December 26, 2022",
      categories: {
        info: "fashion",
      },
    },
    {
      img: "images/assets/photographers-mistakes.webp",
      title: "The Biggest Photographer mistakes",
      date: "December 26, 2022",
      categories: {
        info: "Fashion",
      },
    },
    {
      img: "images/ideas-anime.webp",
      title: "Live Ideas You Might Be Anime",
      date: "December 26, 2022",
      categories: {
        info: "Culture",
      }, 
    },
    {
      img: "images/assets/visit-france.webp",
      title: "Reasons to visit France",
      date: "December 26, 2022",
      categories: {
        info: "Lifestyle",
      }, 
    },
    {
      img: "images/assets/travel-alone.webp",
      title: "Traveling Alone Is Awesome",
      date: "December 26, 2022",
      categories: {
        info: "Culture",
      }, 
    },
    {
      img: "images/assets/success-story.webp",
      title: "The Best Success Stories",
      date: "December 26, 2022",    
      categories: {
        info: "Lifestyle",
      }, 
    },
    {
      img: "images/music-love.webp",
      title: "Music the love of my life",
      date: "December 26, 2022",
      categories: {
        info: "Fashion",
      }, 
    },
    {
      img: "images/assets/anime-fashion.webp",
      title: "Fashion Trends now a days",
      date: "December 26, 2022",
      categories: {
        info: "Fashion",
      }, 
    },
  ],

  videoEl: [
    {
      link: "https://www.youtube.com/embed/ICt1jYfucec?si=ZnNLazoM6rPviGvX",
      text: "Sword of The Stranger Fight Scene",
    },
    {
      link: "https://www.youtube.com/embed/zlwQERpksnw?si=QJplYSf8_3sSCJmQ",
      text: "Sun's Put, Guns Out",
    },
    {
      link: "https://www.youtube.com/embed/itQnUDMMhaU?si=bEF2MqwMHtnxo5yo",
      text: "Top 10 Vinland Saga Moments",
    },
    {
      link: "https://www.youtube.com/embed/IrU2dklT11s?si=_XgoYq4_YwRcSQRC",
      text: "Everytime Sukuna Appears",
    },
    {
      link: "https://www.youtube.com/embed/H5qupR6YQpQ?si=s2a6wJkd1IDs0AA7",
      text: "Wizard King (Julius) Vs Licht (Patri) Full Fight",
    },
    {
      link: "https://www.youtube.com/embed/CkC5CtabT1Y?si=eijE_sf1hGvdGni2",
      text: "Konan arranges 600 bilion explosive charms to defeat Uchiha Madara",
    },
  ],
});
