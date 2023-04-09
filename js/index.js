import {Router} from './route.js'

const router = new Router() // função construtora, usando a palavra reservada "new",  cria uma instância ( fotôgragia ) da Class e coloca na varíavel nesse caso "router"
router.add('/','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/404.html')


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()