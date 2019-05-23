import React from 'react'

/*
 * Constants for magic values used multiple places in the project.
 *
 * Note that there's a separate styleConstants.js for colors and anythinng
 * else used for CSS which I want to keep in a single place.
 */

/*
 * HTML entity for the symbol, like an "f" with a tail, used to represent
 * the unit of money used in the game.
 *
 * It's in a span because that happens to work with how I use it, and this
 * works around the gotcha of JSX escaping all "dynamic" values.
 */
export const FLORIN_MARK = <span>&#402;</span>
