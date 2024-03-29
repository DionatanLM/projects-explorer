import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explorer', '/pages/explorer.html')
router.add(404, '/pages/404.html')

const linkHome = document.querySelector('.link-home')
const linkUniverse = document.querySelector('.link-universe')
const linkExplorer = document.querySelector('.link-explorer')
const body = document.querySelector('body')

linkHome.classList.add('click')

linkHome.addEventListener('click', () => {
  linkHome.classList.add('click')

  linkUniverse.classList.remove('click')
  linkExplorer.classList.remove('click')

  document.body.classList.add('home')
  document.body.classList.remove('universe')
  document.body.classList.remove('exploration')
})

linkUniverse.addEventListener('click', () => {
  linkUniverse.classList.add('click')

  linkHome.classList.remove('click')
  linkExplorer.classList.remove('click')

  document.body.classList.add('universe')
  document.body.classList.remove('home')
  document.body.classList.remove('exploration')
})

linkExplorer.addEventListener('click', () => {
  linkExplorer.classList.add('click')

  linkUniverse.classList.remove('click')
  linkHome.classList.remove('click')

  document.body.classList.add('exploration')
  document.body.classList.remove('home')
  document.body.classList.remove('universe')
})

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
