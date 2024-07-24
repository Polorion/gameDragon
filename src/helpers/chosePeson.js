import playerLeft1 from '../assets/img/players/1/1.webp'
import playerCenter1 from '../assets/img/players/1/2.webp'
import playerRight1 from '../assets/img/players/1/3.webp'

import playerLeft2 from '../assets/img/players/2/1.webp'
import playerCenter2 from '../assets/img/players/2/2.webp'
import playerRight2 from '../assets/img/players/2/3.webp'

import playerLeft3 from '../assets/img/players/3/1.webp'
import playerCenter3 from '../assets/img/players/3/2.webp'
import playerRight3 from '../assets/img/players/3/3.webp'

import playerLeft4 from '../assets/img/players/4/1.png.webp'
import playerCenter4 from '../assets/img/players/4/2.png.webp'
import playerRight4 from '../assets/img/players/4/3.png.webp'

import playerLeft5 from '../assets/img/players/5/1.png.webp'
import playerCenter5 from '../assets/img/players/5/2.png.webp'
import playerRight5 from '../assets/img/players/5/3.png.webp'

import playerLeft6 from '../assets/img/players/6/1.png.webp'
import playerCenter6 from '../assets/img/players/6/2.png.webp'
import playerRight6 from '../assets/img/players/6/3.png.webp'

import playerLeft7 from '../assets/img/players/7/1.png.webp'
import playerCenter7 from '../assets/img/players/7/2.png.webp'
import playerRight7 from '../assets/img/players/7/3.png.webp'

import playerLeft8 from '../assets/img/players/8/1.png.webp'
import playerCenter8 from '../assets/img/players/8/2.png.webp'
import playerRight8 from '../assets/img/players/8/3.png.webp'

import playerLeft9 from '../assets/img/players/9/1.png.webp'
import playerCenter9 from '../assets/img/players/9/2.png.webp'
import playerRight9 from '../assets/img/players/9/3.png.webp'

import playerLeft10 from '../assets/img/players/10/1.png.webp'
import playerCenter10 from '../assets/img/players/10/2.png.webp'
import playerRight10 from '../assets/img/players/10/3.png.webp'

export function ReturnPlayer(number) {
    switch (number) {

        case 1:
            return {
                left: playerLeft1,
                center: playerCenter1,
                right: playerRight1
            }
        case 2:
            return {
                left: playerLeft2,
                center: playerCenter2,
                right: playerRight2
            }
        case 3:
            return {
                left: playerLeft3,
                center: playerCenter3,
                right: playerRight3
            }
        case 4:
            return {
                left: playerLeft4,
                center: playerCenter4,
                right: playerRight4
            }
        case 5:
            return {
                left: playerLeft5,
                center: playerCenter5,
                right: playerRight5
            }
        case 6:
            return {
                left: playerLeft6,
                center: playerCenter6,
                right: playerRight6
            }

        case 7:
            return {
                left: playerLeft7,
                center: playerCenter7,
                right: playerRight7
            }
        case 8:
            return {
                left: playerLeft8,
                center: playerCenter8,
                right: playerRight8
            }
        case 9:
            return {
                left: playerLeft9,
                center: playerCenter9,
                right: playerRight9
            }
        case 10:
            return {
                left: playerLeft10,
                center: playerCenter10,
                right: playerRight10
            }

    }

}