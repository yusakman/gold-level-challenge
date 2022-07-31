import icon1 from '../asset/cards-logo/icon_1.svg'
import icon2 from '../asset/cards-logo/icon_2.svg'
import icon3 from '../asset/cards-logo/icon_3.svg'
import icon4 from '../asset/cards-logo/icon_4.svg'
import avatar from '../asset/ava_1.png'
import rate from '../asset/rate.png'
import iconfb from '../asset/footer-logo/icon_facebook.png'
import iconig from '../asset/footer-logo/icon_instagram.png'
import iconmail from '../asset/footer-logo/icon_mail.png'
import icontwitch from '../asset/footer-logo/icon_twitch.png'
import icontwitter from '../asset/footer-logo/icon_twitter.png'

const navList = [
    {
        text:'Our Services',
        url:'http://localhost:3000/#our-services',
    },
    {
        text:'Why Us',
        url: 'http://localhost:3000/#why-us'
    },
    {
        text: 'Testimonial',
        url: 'http://localhost:3000/#testimonial'
    },
    {
        text: 'FAQ',
        url: 'http://localhost:3000/#faq'
    }
]
// const image = "Logo";
const stList = ['Sewa Mobil Dengan Supir di Bali 12 Jam', 'Sewa Mobil Lepas Kunci di Bali 24 Jam', 'Sewa Mobil Jangka Panjang Bulanan', 'Gratis Antar - Jemput Mobil di Bandara', 'Layanan Airport Transfer / Drop In Out']
const cards = [
    {
        logo: icon1,
        title: "Mobil Lengkap",
        text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
    },
    {
        logo: icon2,
        title: "Harga Murah",
        text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
    },
    {
        logo: icon3,
        title: "Layanan 24 Jam",
        text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
    },
    {
        logo: icon4,
        title: "Sopir Profesional",
        text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    },
]

const testimoni = [
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
    {
        profile:  avatar,
        rate: rate,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        username: "John Dee 32, Bromo"
    },
]

const faq = [
    {
        question: "Apa saja syarat yang dibutuhkan?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
    },
    {
        question: "Berapa hari minimal sewa mobil lepas kunci?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
    },
    {
        question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
    },
    {
        question: "Apakah Ada biaya antar-jemput?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
    },
    {
        question: "Bagaimana jika terjadi kecelakaan",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." 
    },
]

const info = [
    {
        alamat: "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
        email: "binarcarrental@gmail.com",
        nomor: "081-233-334-808"
    }
]

const iconFooter = [iconfb, iconig, iconmail, icontwitch, icontwitter]

const include = [
    "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
    "Sudah termasuk bensin selama 12 jam",
    "Sudah termasuk Tiket Wisata",
    "Sudah termasuk pajak"
]

const exclude = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan"
]

const refund = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan"
]

export {
    navList,
    stList,
    cards,
    testimoni,
    faq,
    info,
    iconFooter,
    include,
    exclude,
    refund
}