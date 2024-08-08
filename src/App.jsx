import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Inform />
      <Kutucuklar />
      <Consultation />
      <Content />
      <Header />
    </div>
  )
}

function Header() {
  return (
    <div className="Header">
      <a href="#"> <img src="/img/logo.svg" alt="Sitenin logosu" /> </a>
      <a href="#" className="btn">Ücretsiz Danışma</a>
    </div>
  )
}

function Inform() {
  return (
    <div className="inform">
    <h1>Tasarım çözümleri kolaylaştırıldı</h1>
    <p>Çeşitli tasarım disiplinlerinde on yılı aşkın deneyime sahip olarak tasarım ihtiyaçlarınız için tek adresinizim.</p>
   </div>
  )
}

function Kutucuklar() {
  return ( 
    <div class="kutucuklar">
      <div class="kutu"><img src="/img/graphicgrafigi.png"/>Graphic Design</div>
      <div class="kutu tek"><img src="/img/UI:Uxgrafik.png"/>UI/UX</div>
      <div class="kutu tek"><img src="/img/appsgrafigi.png"/>Apps</div>
      <div class="kutu"><img src="/img/ıllustrationsgrafigi.png"/>Illustrations</div>
      <div class="kutu"><img src="/img/photgrapygrafig.png"/>Photography</div>
      <div class="kutu"><img src="/img/motiongraphic.png"/>Motion Graphics</div>
  </div>
  )
}

function Consultation() {
  return (
    <div className="consultation">
      <img className="kadindesktop" src="/img/kadınprofil.png" width="445px"  alt="ortafoto" />
      <img className="kadintablet" src="/img/kadinprofiltablet.png" alt="tablet" />
      <div className="yazilar">
      <h1> Ben Amy ve bir sonraki projen üzerinde çalışmayı çok isterim.</h1>
      <p>Güzel tasarım çözümleri oluşturmak için başkalarıyla çalışmayı seviyorum.
      Marka illüstrasyonlarından tamamlamaya kadar her şeyi tasarladım
      mobil uygulamalar. Ben de bir kamera ile kullanışlıyım!</p>
    <a className="buton" href='#'>Ücretsiz Danışma </a>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="content">
    <div className="writes">
    <h1>Benimle bir telefon görüşmesi yapın</h1>
    <p>Sana nasıl yardım edebileceğimi görmek için biraz sohbet etmek isterim. En iyi ilk adım, projenizi ücretsiz bir danışma sırasında tartışmamızdır. O zaman oradan ilerleyebiliriz.</p>
  </div>
  <a className="button" href="#">Ücretsiz Danışma</a>
  </div>
  )
}

export default App
