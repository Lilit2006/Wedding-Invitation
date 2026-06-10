const stamp = document.getElementById('stamp')
const scene = document.getElementById('scene')
const label = document.getElementById('label')
const schedule = document.getElementById('schedule')
const icon = document.querySelector('.chevron')
const texts = document.querySelectorAll('.animated-text')
const audio = document.getElementById('audio')
const wrapper = document.querySelector('.wrapper')

stamp.addEventListener('click', () => {
  if (!scene.classList.contains('opened')) {
    scene.classList.add('opened')
    label.classList.add('show')
    schedule.classList.add('opened')
    audio.play()
  }
})

window.addEventListener('scroll', () => {
  icon.classList.toggle('visible', window.scrollY > 80)
})

texts.forEach(text => {
  const words = text.textContent.trim().split(' ')
  text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ')

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      text.querySelectorAll('.word').forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('show')
        }, index * 100)
      })
      observer.unobserve(text)
    }
  }, { threshold: 0.3 })

  observer.observe(text)
})

const wrapperObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    wrapper.classList.add('show')
    wrapperObserver.unobserve(wrapper)
  }
}, { threshold: 0.2 })

wrapperObserver.observe(wrapper)