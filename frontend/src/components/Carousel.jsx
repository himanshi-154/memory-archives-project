import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Sample data for your posts
  const posts = [
    { id: 1, image: "i.jpg", title: "Rani Laxmi Bai", description: "Rani Lakshmi Bai: The Warrior Queen  • A key leader in the 1857 Indian Rebellion, she led her troops against British forces to defend Jhansi. • Known for her bravery in battle, including her legend ry escape from the fort on horseback with her infant son. • Formed alliances with other freedom fighters, such as Tatya Tope, and fought fiercely in the Battle of Gwalior. • Died in combat in 1858, refusing to surrender, and became a symbol of resistance against British rule. • Her legacy continues to inspire generations, celebrated in literature, poetry, and Indian history." },
    { id: 2, image: "h.jpg", title: "Sarojini Naidu" , description: "Sarojini Naidu: The Nightingale of India •A poet, politician, and prominent leader in the Indian National Congress. •Played a crucial role in the Civil Disobedience Movement and the Quit India Movement. •Became the first woman to serve as the president of the Indian National Congress in 1925. •Advocated for women's rights and social reform, balancing activism with her poetic works. •Served as the first woman Governor of an Indian state (Uttar Pradesh) after independence."},
    { id: 3, image: "d.jpg", title: "Begum Hazrat Mahal", description: "Begum Hazrat Mahal: The Rebel Leader •A leader in the Indian Rebellion of 1857, she fought against British forces after her husband, Nawab Wajid Ali Shah, was exiled. •Took control of Lucknow, leading a strong resistance against British occupation. •Supported by local forces, she fought to preserve the sovereignty of Awadh. •After the rebellion was crushed, she continued to resist British rule from exile in Nepal. •Remains a symbol of female leadership and courage in the struggle for Indian independence." },
    { id: 4, image: "c.jpg", title: "Kasturba Gandhi", description: "Kasturba Gandhi: The Supporter of Non-Violence •Kasturba Gandhi played a critical role in the Indian independence movement, supporting her husband, Mahatma Gandhi, in leading non-violent protests. •Actively involved in movements like the Quit India Movement and Civil Disobedience. •Worked to uplift women's rights, healthcare, and education, particularly for rural communities. •Arrested multiple times for participating in protests.gainst British rule. •A steadfast follower of non-violence, she became a guiding influence in the Indian independence movement." },
    { id: 5, image: "a.jpg", title: "Aruna Asaf Ali", description: "Aruna Asaf Ali: The Revolutionary •Best known for hoisting the Indian National Congress flag during the Quit India Movement in 1942, defying British authorities. •A key leader in the underground movement, organizing protests and resistance against colonial rule. •Imprisoned multiple times for her activism, earning her the title GRAND OLD LADY OF THE INDEPENDENCE MOVEMENT. •After independence, continued to work for social reform and justice. •Awarded the Bharat Ratna posthumously for her contributions to the freedom struggle." },
    { id: 6, image: "j.jpg", title: "Usha Mehta", description: "Usha Mehta: The Secret Radio Broadcaster • Played a key role in the Quit India Movement by setting up an underground radio station in 1942. • Broadcasted nationalist messages and news to counter British propaganda during the movement. • Arrested by British authorities for her involvement, but her work inspired thousands to join the freedom struggle. • After independence, she continued to work in education and Gandhian principles of non-violence. • Honored with numerous awards for her contributions, including the Padma Vibhushan." },
    { id: 7, image: "g.jpg", title: "Annie Besant", description: "Annie Besant: The Theosophist and Freedom Fighter •A British social reformer who became a prominent leader in the Indian freedom movement. •Founded the Home Rule League in 1916, advocating for self-governance for India. •Played a vital role in educating and mobilizing Indian masses, including women, for the cause of independence. •Became the first woman president of the Indian National Congress in 1917. •Championed education, establishing schools and advocating for women's rights in India." },
    { id: 8, image: "e.jpg", title: "Kamala Nehru", description: "Kamala Nehru: The Brave Activist •The wife of Jawaharlal Nehru, she actively participated in the Non-Cooperation Movement and the Civil Disobedience Movement. •Led protests, boycotts, and picketing of foreign goods during the struggle for independence. •Worked with Mahatma Gandhi in organizing the Swadeshi Movement and mobilizing women for nationalist causes. •Kamala Nehru's early death did not diminish her influence, and she inspired many, including her daughter Indira Gandhi, to continue the fight for freedom." },
    { id: 9, image: "b.jpg", title: "Bhikaji Cama", description: "Bhikaji Cama: The Flag Bearer of Independence •An early revolutionary and staunch advocate for India's independence, she played a crucial role in mobilizing support from abroad. •In 1907, she unfurled the first version of the Indian flag at an international socialist conference in Germany. •Fought for India's independence from exile in Europe, writing articles and rallying support from the Indian diaspora. •Her activism made her one of the most prominent figures in the international movement for Indian independence. •Revered as one of the foremothers of the Indian national flag." },
    { id: 10, image: "f.jpg", title: "Durgabai Deshmukh", description: "Durgabai Deshmukh: The Social Reformer •Actively participated in the Non-Cooperation Movement and Salt Satyagraha. •Organized women's groups and protests against British ruleand later worked towards the rehabilitation of Indian refugees post-independence. •Advocated for women's education, founding several institutions and becoming a member of the Constituent Assembly of India. •Established the Andhra Mahila Sabha to support women's welfare and education. •Post-independence, she played a vital role in legal and social reforms in the new republic." },
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
