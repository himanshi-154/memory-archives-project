import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel3 = () => {
  // Sample data for your posts
  const posts = [
    { id: 1, 
      image: "a2.png", 
      title: "Durga Bhabhi: The Revolutionary Spy", 
      description: "Durga Bhabhi, born as Durga Devi Vohra, was a key member of the Hindustan Socialist Republican Association (HSRA). Known as the Revolutionary Queen, she actively worked alongside Bhagat Singh, Rajguru, and Chandrashekhar Azad. She played a pivotal role in espionage by smuggling weapons, passing on classified information, and disguising revolutionaries to evade British surveillance. Her most famous act of defiance was escorting Bhagat Singh during his escape after the Saunders assassination, showcasing her courage and sharp wit in the fight for India's independence. " ,
      link: "https://hi.wikipedia.org/wiki/%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BE_%E0%A4%AD%E0%A4%BE%E0%A4%AD%E0%A5%80",
    },


    { id: 2, image: "g3.jpg", title: "Usha Mehta: The Voice of Secret Radio" , description: "Usha Mehta was a fearless freedom fighter who operated an underground radio station during the Quit India Movement in 1942. Through this secret channel, she transmitted critical information, revolutionary speeches, and patriotic songs, evading British censors and helping sustain the morale of freedom fighters. Her clandestine activities provided a vital communication link for the nationalist movement, making her a significant figure in the resistance against colonial rule. ",
        link: "https://en.wikipedia.org/wiki/Usha_Mehta",
    },
    { id: 3, image: "e3.jpg", title: "Rani Gaidinliu: The Guerrilla Leader", description: "Rani Gaidinliu, a Naga spiritual and political leader, was an ardent opponent of British colonialism. She organized a network of spies and guerrilla fighters in Manipur and Nagaland to resist British rule. Known for her intelligence and organizational skills, she coordinated movements, collected intelligence, and inspired her community to rise against oppression. Her efforts earned her recognition as the Rani of the Nagas, symbolizing indigenous resistance in India's freedom struggle. ",
        link: "https://en.wikipedia.org/wiki/Rani_Gaidinliu",
     },
    { id: 4, image: "b2.webp", title: "Kalpana Dutt: The Revolutionary Insider", description: "Kalpana Dutt was a prominent member of the Indian Republican Army and closely associated with Surya Sen in the Chittagong Armoury Raid. Known for her exceptional intelligence and bravery, she acted as a spy, gathering information and assisting in planning revolutionary activities. Her ability to evade capture and communicate covertly with her comrades made her an essential figure in the revolutionary network.",
        link: "https://en.wikipedia.org/wiki/Kalpana_Datta",
     },
    { id: 5, image: "c3.jpg", title: "Bhikaji Cama: The Networker Abroad", description: "Bhikaji Cama was a fiery nationalist who used her time in Europe to further India’s freedom struggle. As an activist and covert operative, she networked with international revolutionaries, raised funds for nationalist activities, and spread awareness of British colonial atrocities. Through her strategic intelligence-sharing and the distribution of revolutionary pamphlets, such as Bande Mataram, she helped connect India’s freedom fighters with global allies. Her efforts were instrumental in garnering international support for Indian independence and exposing the exploitative policies of the British Empire.",
        link:"https://en.wikipedia.org/wiki/Bhikaiji_Cama",
     },
    { id: 6, image: "f3.jpg", title: "Saraswathi Rajamani: India’s Youngest Spy ", description: "Saraswathi Rajamani, born in 1927 in Rangoon (now Yangon), Burma, was deeply influenced by her nationalist upbringing. Her family supported India’s freedom struggle, and her patriotic zeal was shaped by the teachings of Subhas Chandra Bose. At just 16, she joined the Indian National Army (INA) and became its youngest and first female spy. Disguised as a boy named Mani, she infiltrated British military spaces, delivering intelligence to the INA. Her daring missions included rescuing a fellow spy by disguising herself as a dancer and escaping after being injured by gunfire ." ,
        link:"https://en.wikipedia.org/wiki/Saraswathi_Rajamani",
    },
    { id: 7, image: "d3.jpg", title: "Neera Arya: The Unsung Spy of Azad Hind Fauj ", description: " Neera Arya was one of the earliest female spies of the Azad Hind Fauj (Indian National Army), known for her intelligence work during India's freedom struggle. Her role in gathering crucial information and supporting the INA's resistance against British colonial rule was pivotal. After the INA's defeat, Neera Arya was captured and imprisoned in the notorious Andaman Cellular Jail, where she endured torture and hardship. Despite the pain and trauma, she remained loyal to Netaji Subhas Chandra Bose and expressed unyielding patriotism. Following her release, she lived in obscurity, passing away in 1998, without the recognition she truly deserved for her contributions .",
        link: "https://cmsadmin.amritmahotsav.nic.in/unsung-heroes-detail.htm?10779",
     },
  ];

  // Settings for the slider
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderContainer = document.querySelector('.slider-container');


  return (
    <div className="slider-container">
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
              <a href={post.link} class="read-more-btn" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel3;
