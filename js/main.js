// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if(menuToggle){
  menuToggle.addEventListener('click', () => {
    if(mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });
}

// for multiple pages we add toggles with ids menuToggle2..3..4
[2,3,4].forEach(i => {
  const t = document.getElementById('menuToggle'+i);
  const n = document.getElementById('mainNav'+i);
  if(t && n){
    t.addEventListener('click', ()=> {
      n.style.display = n.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});

// Contact form validation + mock submit
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    if(!name || !email || !message){
      feedback.textContent = 'Please fill in all fields.';
      feedback.style.color = 'crimson';
      return;
    }

    // Basic email check
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      feedback.textContent = 'Please provide a valid email.';
      feedback.style.color = 'crimson';
      return;
    }

    // mock submit
    feedback.textContent = 'Sending...';
    feedback.style.color = '#6b7280';
    try{
      // replace this with a real API endpoint when available
      await new Promise(r => setTimeout(r, 800));
      feedback.textContent = 'Message sent. Thank you!';
      feedback.style.color = 'green';
      contactForm.reset();
    }catch(err){
      feedback.textContent = 'Error sending message. Try again later.';
      feedback.style.color = 'crimson';
    }
  });
}
