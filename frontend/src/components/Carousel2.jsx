import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {
  // Sample data for your posts
  const posts = [
    { id: 1, 
      image: "b1.jpg", 
      title: "Azeezunbai: The Rebel of 1857 ", 
      description: "Azeezunbai was a remarkable figure in the Indian Rebellion of 1857, recognized for her courage and contributions to the fight against British colonial rule. A courtesan from Kanpur, she used her influence to mobilize and support Indian sepoys, becoming a symbol of resistance. Leveraging her position, she provided intelligence to the rebels, gathered information about British movements, and played a key role in planning attacks. Azeezunbai also offered logistical support, including food and supplies, and her home served as a meeting place for freedom fighters. Captured by the British, she endured torture without betraying her compatriots, embodying unwavering loyalty to India's independence struggle. " ,
      link: "https://tornosindia.com/azizan-bai-contribution-of-a-beauty-to-the-struggle-of-1857/"
    },


    { id: 2, image: "c1.jpeg", title: "Begum Hazrat Mahal: The Queen of Lucknow" , description: "Begum Hazrat Mahal, the wife of Nawab Wajid Ali Shah of Awadh, emerged as a key leader during the Indian Rebellion of 1857. Following the British annexation of Awadh and the exile of her husband, she assumed leadership, declaring her son, Birjis Qadr, as ruler and leading the defense of Lucknow. Renowned for her strong military strategies, she organized and led rebel forces in the city's resistance. When the British recaptured Lucknow, she fled to Nepal, living in exile until her death in 1879. Begum Hazrat Mahal remains a symbol of courage and resistance in India's struggle for independence. ",
        link: "https://en.wikipedia.org/wiki/Begum_Hazrat_Mahal",
    },
    { id: 3, image: "d1.jpg", title: "Gauhar Jaan: The Voice for Swaraj", description: "Gauhar Jaan was a renowned classical singer and dancer who played a unique role in India's fight for independence during British rule. Known for her exceptional musical talent, she used her art to express support for Swaraj (self-rule) and inspire nationalist sentiments. In the early 20th century, she was asked by Mahatma Gandhi to raise funds for the Swaraj movement through her performances, and though Gandhi was absent from the fundraising concert, she managed to contribute half of the proceeds. A celebrated figure in Indian music, Gauhar Jaan used her performances as a medium for resistance, embodying India’s cultural heritage and often incorporating nationalist themes. Remembered as a brilliant artist and a voice for Swaraj, she helped unite people against colonial oppression through her talent and influence. ",
        link: "https://en-m-wikipedia-org.translate.goog/wiki/Gauhar_Jaan?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
     },
    { id: 4, image: "e1.jpeg", title: "Husna Bai: The Leader of Tawaif Sabha", description: "Husna Bai was a prominent 19th-century figure known for her leadership in the Tawaif Sabha, a collective of courtesans who played a significant role in India's cultural and social landscape. Although often overlooked in the mainstream narrative of the Indian freedom struggle, her contributions were impactful. As a leader of the Tawaif Sabha, she advocated against British colonial policies while promoting Indian arts and culture as a form of resistance. Husna Bai also worked for social reform, particularly advocating for the rights and dignity of women in the courtesan community. Her influence extended beyond the arts, making her an important figure in both cultural and social resistance against British rule. ",
        link: "https://scroll.in/article/1066660/husna-bai-the-tawaif-who-made-hindustani-music-a-respectable-profession-for-women-artists",
     },
    { id: 5, image: "g1.jpg", title: "Vidyadhar Bai: The Patriotic Singer", description: "Vidyadhar Bai was a celebrated folk singer and an unsung heroine of the Indian independence movement, best known for using her music to inspire patriotism and unite people against British colonial rule. Dedicated to the cause of independence, she sang nationalist songs at gatherings, boycotted foreign-made clothing, and wore only Indian hand-spun fabric. Her performances, especially in rural areas, rallied people for Swaraj and resistance against British oppression. As a cultural symbol, she instilled pride in Indian heritage, countering British efforts to suppress it. Vidyadhar Bai's music became a powerful medium for promoting patriotism, making her an important, though often overlooked, figure in India's struggle for independence. ",
        link: "https://www.shethepeople.tv/film-theatre/7-unsung-courtesans-who-contributed-to-india-freedom-struggle-4544662",
     },
    { id: 6, image: "f1.png", title: "Hussaini: The Conspirator of Cawnpore", description: "Hussaini was a key figure in the Indian Rebellion of 1857, known for her role as a conspirator in Cawnpore (Kanpur), where she played a vital part in organizing resistance against British forces. Believed to be one of the key conspirators in the Bibighar massacre, which resulted in the deaths of over 100 British women and children, her involvement highlights the significant role some courtesans played in the rebellion. Hussaini gathered intelligence on British troop movements, which proved critical for the rebels, and actively encouraged local rebels and women to join the fight. Deeply involved in the rebellion's strategic planning, she worked behind the scenes to weaken British control. Her courage and intelligence made her a crucial figure in the resistance, showcasing the often overlooked role of women in the 1857 uprising. ",
        link: "https://www.dawn.com/news/1489351",
     },
    { id: 7, image: "h1.jpg", title: "Zohra Bai: The Cultural Patriot of Delhi ", description: " Zohra Bai was one of the most famous courtesans of her time, renowned for her musical talent. While her primary role was in the cultural sphere, she became involved in the political atmosphere of the period. She performed at the courts of Nawabs and was part of the vibrant cultural movement in Delhi, which resisted British colonial influence. Zohra Bai was instrumental in promoting classical music and dance, particularly in the tawaif tradition. During the revolt of 1857, such gatherings and cultural spaces became informal forums for the expression of nationalist sentiments, including the desire for independence. Her role in these cultural gatherings helped keep the spirit of resistance alive among the local elite and aristocracy. ",
        link: "https://en.wikipedia.org/wiki/Zohrabai_Ambalewali",
     },
    { id: 8, image: "a1.jpg", title: "Asghari Begum: The Melodic Voice of Lucknow ", description: "Asghari Begum was a celebrated courtesan from Lucknow, known for her classical singing skills. She was deeply connected with the cultural resistance against British colonialism, where music and the performing arts were often used as subtle forms of protest. She was highly influential in the courts of Nawabs and respected for her mastery of classical Hindustani music, particularly thumris and ghazals. Asghari Begum, along with other tawaifs, created a cultural space that promoted nationalism and Indian identity in opposition to British rule. ",
        link: "https://amritmahotsav.nic.in/district-reopsitory-detail.htm?28284",
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

export default Carousel2;
