import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Sample data for your posts
  const posts = [
    { id: 1, 
      image: "i.jpg", 
      title: "Rani Laxmi Bai : The Warrior Queen", 
      description: " A key leader in the 1857 Indian Rebellion, she led her troops against British forces to defend Jhansi. She is known for her bravery in battle, including her legendary escape from the fort on horseback with her infant son. She Formed alliances with other freedom fighters, such as Tatya Tope, and fought fiercely in the Battle of Gwalior. She Died in combat in 1858, refusing to surrender, and became a symbol of resistance against British rule. Her legacy continues to inspire generations, celebrated in literature, poetry, and Indian history." 
    },


    { id: 2, image: "h.jpg", title: "Sarojini Naidu : The Nightingale of India" , description: "A poet, politician, and prominent leader in the Indian National Congress. She Played a crucial role in the Civil Disobedience Movement and the Quit India Movement, and became the first woman to serve as the president of the Indian National Congress in 1925. She also Advocated for women's rights and social reform, balancing activism with her poetic works. She also served as the first woman Governor of an Indian state (Uttar Pradesh) after independence."},
    { id: 3, image: "d.jpg", title: "Begum Hazrat Mahal : The Rebel Leader", description: "A leader in the Indian Rebellion of 1857, she fought against British forces after her husband, Nawab Wajid Ali Shah, was exiled. Took control of Lucknow, leading a strong resistance against British occupation. Supported by local forces, she fought to preserve the sovereignty of Awadh. After the rebellion was crushed, she continued to resist British rule from exile in Nepal. She remains a symbol of female leadership and courage in the struggle for Indian independence." },
    { id: 4, image: "c.jpg", title: "Kasturba Gandhi : The Supporter of Non-Violence", description: "Kasturba Gandhi played a critical role in the Indian independence movement, supporting her husband, Mahatma Gandhi, in leading non-violent protests. She was actively involved in movements like the Quit India Movement and Civil Disobedience. She also worked to uplift women's rights, healthcare, and education, particularly for rural communities. She was arrested multiple times for participating in protests against British rule. She was a steadfast follower of non-violence, she became a guiding influence in the Indian independence movement." },
    { id: 5, image: "a.jpg", title: "Aruna Asaf Ali : The Revolutionary", description: "Aruna Asaf Ali is Best known for hoisting the Indian National Congress flag during the Quit India Movement in 1942, she defied British authorities and became a key leader in the underground movement, organizing protests and resistance against colonial rule. Imprisoned multiple times for her activism, she earned the title Grand Old Lady of the Independence Movement. After independence, she continued to work for social reform and justice. She was posthumously awarded the Bharat Ratna for her contributions to the freedom struggle." },
    { id: 6, image: "j.jpg", title: "Usha Mehta : The Secret Radio Broadcaster", description: "Usha Mehta played a key role in the Quit India Movement by setting up an underground radio station in 1942. She broadcasted nationalist messages and news to counter British propaganda during the movement. Arrested by British authorities for her involvement, her work inspired thousands to join the freedom struggle. After independence, she continued to work in education and promoted Gandhian principles of non-violence. She was honored with numerous awards for her contributions, including the Padma Vibhushan." },
    { id: 7, image: "g.jpg", title: "Annie Besant : The Theosophist and Freedom Fighter", description: " A British social reformer who became a prominent leader in the Indian freedom movement, she founded the Home Rule League in 1916, advocating for self-governance for India. She played a vital role in educating and mobilizing Indian masses, including women, for the cause of independence. In 1917, she became the first woman president of the Indian National Congress. She championed education, established schools, and advocated for women's rights in India." },
    { id: 8, image: "e.jpg", title: "Kamala Nehru : The Brave Activist", description: "Kamala Nehru, the wife of Jawaharlal Nehru, actively participated in the Non-Cooperation Movement and the Civil Disobedience Movement. She led protests, boycotts, and picketing of foreign goods during the struggle for independence. Working with Mahatma Gandhi, she helped organize the Swadeshi Movement and mobilized women for nationalist causes. Although her early death cut short her life, Kamala Nehru's influence endured, inspiring many, including her daughter Indira Gandhi, to continue the fight for freedom." },
    { id: 9, image: "b.jpg", title: "Bhikaji Cama : The Flag Bearer of Independence", description: "Bhikaji Cama was an early revolutionary and staunch advocate for India's independence, playing a crucial role in mobilizing support from abroad. In 1907, she unfurled the first version of the Indian flag at an international socialist conference in Germany. From exile in Europe, she fought for India's independence by writing articles and rallying support from the Indian diaspora. Her activism made her one of the most prominent figures in the international movement for Indian independence, and she is revered as one of the foremothers of the Indian national flag." },
    { id: 10, image: "f.jpg", title: "Durgabai Deshmukh : The Social Reformer", description: "Durgabai Deshmukh actively participated in the Non-Cooperation Movement and the Salt Satyagraha. She organized women's groups and protests against British rule and later worked toward the rehabilitation of Indian refugees after independence. An advocate for women's education, she founded several institutions and became a member of the Constituent Assembly of India. She established the Andhra Mahila Sabha to support women's welfare and education. Post-independence, she played a vital role in legal and social reforms in the new republic." },
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
