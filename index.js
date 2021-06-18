let continuar

while( continuar != "No" ) {
  let com = Math.random()
  let jug = prompt( "¿Piedra, papel o tijera?" )

  console.log( com )

  if( com < 0.34) {
    com = "Piedra"
  }
  else if( com >= 0.34 && com < 0.68) {
    com = "Papel"
  }
  else {
    com = "Tijera"
  }

  if( jug === com ) {
    console.log( "Empate!" )
  }
  else if( jug === "Piedra" && com === "Papel" ) {
    console.log( "Com gana... " + com + " envuelve " + jug )
  }
  else if( jug === "Piedra" && com === "Tijera" ) {
    console.log( "Has ganado... " + jug + " daña " + com )
  }
  else if( jug === "Papel" && com === "Piedra" ) {
    console.log( "Has ganado... " + jug + " envuelve " + com )
  }
  else if( jug === "Papel" && com === "Tijera" ) {
    console.log( "Com gana... " + com + " daña " + jug )
  }
  else if( jug === "Tijera" && com === "Piedra" ) {
    console.log( "Com gana... " + com + " daña " + jug )
  }
  else {
    console.log( "Has ganado... " + jug + " daña " + com )
  }

  continuar = prompt( "¿Desea continuar?" )
}