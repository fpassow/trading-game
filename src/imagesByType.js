/*
 * Used to decouple the names and locations of image files from 
 * the string values identifying various types of things.
 *
 * Currently includes type-string to image file mappings for ship types 
 * and cargos. 
 * 
 * Note the assumption that no type name will ever appear in 
 * two categories. Probably something to recondsider. But 
 * a) the natural names just don't seem to overlap, and
 * b) they are not visible to the user so it's easy to pick names
 * to ensure that they don't.
 */

export default {
    oliveoil: 'img/oliveoil.png',
    fishboat: 'img/fishboat.png',
    albionsteamclipper: 'img/albionsteamclipper.png',
    enginebarge: 'img/enginebarge.png',
    silverzeplin: 'img/silverzeplin.png',
    steamturbinehovercraft: 'img/steamturbinehovercraft.png',
    coal: 'img/coal.png',
    leopardwood: 'img/leopardwood.png',
    clockworks: 'img/clockworks.png',
    kippers: 'img/kippers.png',
    fluff: 'img/fluff.png'
}