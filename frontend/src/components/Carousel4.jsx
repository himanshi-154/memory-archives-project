import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel4 = () => {
  // Sample data for your posts
  const posts = [
    { id: 1, 
      image: "i4.jpg", 
      title: "Janaki Ammal  ", 
      description: "Janaki Ammal was a pioneering Indian botanist and cytogeneticist known for her contributions to plant genetics and biodiversity conservation. Born in Kerala, she overcame societal challenges to earn a doctorate in cytogenetics from the University of Michigan in 1931. Her research on sugarcane genetics significantly improved high-yield, disease-resistant varieties, benefiting agriculture in India and beyond. She also studied the cytology of indigenous plants and advocated for environmental preservation. Awarded the Padma Shri in 1977, Janaki Ammal remains an inspiration for women in science and environmental conservation.  " ,
      link: "https://en.wikipedia.org/wiki/Janaki_Ammal",
    },


    { id: 2, image: "c4.jpg", title: "Asima Chatterjee" , description: "Asima Chatterjee was a renowned Indian organic chemist and the first woman to receive a Doctor of Science degree from an Indian university. She made groundbreaking contributions to the fields of medicinal chemistry and phytomedicine, particularly in developing anti-epileptic and anti-malarial drugs. Her extensive research on alkaloids and plant-based compounds advanced the understanding of natural product chemistry. Honored with the Padma Bhushan in 1975, Asima Chatterjee also played a significant role in promoting science education in India, inspiring generations of women to pursue careers in STEM  ",
        link: "https://en.wikipedia.org/wiki/Asima_Chatterjee",
    },
    { id: 3, image: "f5.jpeg", title: "Dr. Indira Hinduja  ", description: "Dr. Indira Hinduja is a distinguished Indian gynecologist, obstetrician, and infertility specialist known for her pioneering work in reproductive medicine. She achieved a historic milestone in 1986 by delivering India's first test-tube baby, marking a breakthrough in in-vitro fertilization (IVF) technology. Dr. Hinduja also developed the gamete intrafallopian transfer (GIFT) technique, further advancing fertility treatments. In addition to her clinical accomplishments, she has made significant contributions to medical research and education, helping countless individuals and couples overcome infertility. Her work has earned her widespread recognition and numerous accolades in the field of medicine.  ",
        link: "https://en.wikipedia.org/wiki/Indira_Hinduja",
     },
    { id: 4, image: "h4.avif", title: "Tessy Thomas  ", description: "Dr. Tessy Thomas, often referred to as the Missile Woman of India, is a prominent Indian scientist and aerospace engineer. She is best known for her pivotal role in the development of the Agni series of ballistic missiles as part of India’s Defence Research and Development Organisation (DRDO). Dr. Thomas made history by becoming the first woman to head an Indian missile project, serving as the project director for Agni-IV and later as the director general of aeronautical systems. Her contributions to India's defense capabilities have earned her widespread recognition and prestigious awards, making her an inspiration for women in science and technology. ",
        link: "https://en.wikipedia.org/wiki/Tessy_Thomas",
     },
    { id: 5, image: "g4.jpg", title: "Kamal Ranadive ", description: "Dr. Kamal Ranadive was a pioneering Indian biomedical researcher and cell biologist, renowned for her groundbreaking work in cancer research. She was among the first to identify the link between cancers and certain viruses, contributing significantly to the understanding of the disease. Dr. Ranadive also played a key role in establishing tissue culture research in India and advocated for using science to address societal challenges. As the founder of the Indian Women Scientists’ Association (IWSA), she actively supported women pursuing careers in STEM. Her contributions remain a cornerstone in Indian biomedical science and an inspiration for future generations. ",
        link:"https://en.wikipedia.org/wiki/Kamal_Ranadive",
     },
    { id: 6, image: "b4.jpg", title: "Anna Mani ", description: "Dr. Anna Mani was a pioneering Indian physicist and meteorologist who made significant contributions to atmospheric science and instrumentation. She served as the Deputy Director General of the Indian Meteorological Department and was instrumental in designing and standardizing weather instruments in India. Dr. Mani also contributed to solar radiation and wind energy studies, playing a vital role in renewable energy development. A trailblazer in her field, she was deeply committed to scientific precision and environmental research, inspiring generations of women scientists in India and beyond.  " ,
        link:"https://en.wikipedia.org/wiki/Saraswathi_Rajamani",
    },
    { id: 7, image: "d4.png", title: "Bibha Chowdhuri  ", description: " Dr. Bibha Chowdhuri was an Indian particle physicist known for her pioneering investigations into cosmic rays. Working with D.M. Bose, she utilized photographic nuclear emulsion to become the first to detect and identify mesons. Her groundbreaking work in nuclear physics and cosmic ray research contributed significantly to the development of particle physics in India. Dr. Chowdhuri was also involved in India's atomic energy program, working closely with Dr. Homi J. Bhabha. In recognition of her contributions to science, the International Astronomical Union (IAU) named the star HD 86081 Bibha in her honor. Her work continues to inspire future generations of scientists. ",
        link: "https://en.wikipedia.org/wiki/Bibha_Chowdhuri",
     },
     { id: 8, image: "e4.webp", title: "Dr. Gagandeep Kang ", description: " Dr. Gagandeep Kang  is a virologist known for her groundbreaking work in the development of vaccines. She was instrumental in the development of a rotavirus vaccine in India, which has helped combat one of the leading causes of severe diarrhea in children. Dr. Kang has contributed extensively to infectious disease research, particularly in areas that impact public health in developing countries. Her work has not only advanced scientific knowledge but also improved the lives of millions by providing affordable solutions to health challenges in India.  ",
        link: "https://en-m-wikipedia-org.translate.goog/wiki/Gagandeep_Kang?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
     },
     { id: 9, image: "a4.jpg", title: "Aditi Pant ", description: " Dr. Aditi Pant is an Indian oceanographer and the first Indian woman to visit Antarctica. She made significant contributions to marine science, particularly in the areas of oceanographic research and environmental monitoring. Dr. Pant was part of India's first scientific expedition to Antarctica in 1983, where she conducted studies on the ice and the surrounding environment, contributing to the understanding of polar ecosystems. Her work in the field of oceanography has been instrumental in advancing India's research in marine science, and she continues to inspire women in the field of science and exploration. ",
        link: "https://en.wikipedia.org/wiki/Aditi_Pant",
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

export default Carousel4;
