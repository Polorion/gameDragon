// import Bol1 from '../assets/logo/elements/elements/AnyConv.com__brux.webp'
// import Bol2 from '../assets/logo/elements/elements/AnyConv.com__goose.webp'
// import Bol3 from '../assets/logo/elements/elements/AnyConv.com__element-12.webp'
// import Bol4 from '../assets/logo/elements/elements/AnyConv.com__hitchRu.webp'
// import Bol5 from '../assets/logo/elements/elements/AnyConv.com__itali.webp'
// import Bol6 from '../assets/logo/elements/elements/AnyConv.com__oasis.webp'
// import Bol7 from '../assets/logo/elements/elements/AnyConv.com__Giusto.webp'
// import Bol8 from '../assets/logo/elements/elements/AnyConv.com__hitchRe.webp'
// import Bol9 from '../assets/logo/elements/elements/AnyConv.com__italiCo.webp'
import Bol1 from '../assets/logo/elements/elements/brux.png'
import Bol2 from '../assets/logo/elements/elements/goose.png'
import Bol3 from '../assets/logo/elements/elements/element-12.png'
import Bol4 from '../assets/logo/elements/elements/hitchRu.png'
import Bol5 from '../assets/logo/elements/elements/itali.png'
import Bol6 from '../assets/logo/elements/elements/oasis.png'
import Bol7 from '../assets/logo/elements/elements/Giusto.png'
import Bol8 from '../assets/logo/elements/elements/hitchRe.png'
import Bol9 from '../assets/logo/elements/elements/italiCo.png'


export function Returnlogo(number) {
    switch (number) {

        case 1:
            return {
                img: Bol3
            }
        case 2:
            return {
                img: Bol9
            }

        case 3:
            return {
                img: Bol1
            }
        case 4:
            return {
                img: Bol5
            }
        case 5:
            return {
                img: Bol7
            }
        case 6:
            return {
                img: Bol8
            }
        case 7:
            return {
                img: Bol6
            }
        case 8:
            return {
                img: Bol4
            }
        case 9:
            return {
                img: Bol2
            }
        case 0:
            return {
                img: Bol2
            }
        default :
            return {
                img: ''
            }


    }

}