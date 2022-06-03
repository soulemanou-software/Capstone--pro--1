// Mobile menu function//
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const featureSection = document.querySelector('.featured-carts-container');

menuBtn.addEventListener('click', () => {
  mainNav.classList.add('show');
});

mainNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' || event.target.tagName === 'I') {
    mainNav.classList.remove('show');
  }
});

/*here is for the lecturas data cart creation */

const features = [
    {
      id: 1,
      photo: './Resources/images/11 PM.png',
      name: 'Soulemanou Babanou',
      role: 'C.E.O & Founder Of Fastdevz',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
    {
      id: 2,
      photo: './Resources/images/speaker_01.png',
      name: 'John Who ',
      role: 'Sotware Engineer and teacher of DBMS',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
    {
      id: 3,
      photo: './Resources/images/speaker_03.png',
      name: 'Peter Code',
      role: 'Back-end developer and mentor at Fastdevz',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
    {
      id: 4,
      photo: './Resources/images/speaker_04.png',
      name: 'Rames Pires',
      role: 'Co-founder of Fastdevz',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
    {
      id: 5,
      photo: './Resources/images/speaker_05.png',
      name: 'Astrid Mugisha',
      role: 'Secretary and legal laws professor',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
    {
      id: 6,
      photo: './Resources/images/speaker_06.png',
      name: 'Claudia',
      role: 'H.O.D of social science with master degree',
      topic: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human',
    },
  ];
  
  for (let n = 0; n < features.length; n += 1) {
    const feature = features[n];
  
    featureSection.innerHTML += `
    <div class="featured-cart feature-cart-content" >
        <div class="teach-img">
            <img src="${feature.photo}" alt="teacher_pic" class="teacher_pic">
        </div>
             <div class="featured-text-content">
                 <h2>${feature.name}</h2>
                    <em> ${feature.role}</em>
                    <div class="line"></div>
                     <p>${feature.topic}</p>
            </div>
         </div>
    `;
  }