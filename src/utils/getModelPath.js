export const getModelPath = slug => {
  let path = ''

  switch (slug) {
    case 'height-adjustable-desk-model-strong': {
      path = '/wood-model.glb'
      break
    }
    case 'model-strong-dsp': {
      path = '/dsp-model.glb'
      break
    }
    case 'model-strong-mdf': {
      path = '/dsp-model.glb'
      break
    }
    case 'work-station-wpn': {
      path = '/wpn-model.glb'
      break
    }
    case 'stil-dlja-shkoljariv': {
      path = '/child-model-blue.glb'
      break
    }
    case 'gaming_desk': {
      path = '/game-model-black.glb'
      break
    }
    case 'wingame': {
      path = '/wingame-model.glb'
      break
    }
    case 'ar-platforma': {
      path = '/platforma-akh-model.glb'
      break
    }
    case 'shelf-for-system-unit': {
      path = '/polka-model.glb'
      break
    }
    case 'kryuchok': {
      path = '/hook-naush-model.glb'
      break
    }
    case 'pidstakannyk-plastykovyj': {
      path = '/stakan-model.glb'
      break
    }
    case 'modul-z-dvoh-yashhykiv-pidvisnyj': {
      path = '/twodrawes-black-model.glb'
      break
    }
    case 'yashhyk-z-fanery': {
      path = '/plywoodbox-model-a4.glb'
      break
    }
    default: {
      path = ''
      break
    }
  }

  return path
}