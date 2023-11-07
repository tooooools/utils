/* global atob, Blob, FileReader, Image, XMLHttpRequest */

export const blob = b => ({
  toDataURL: async () => new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result)
    reader.readAsDataURL(b)
  }),

  toObjectURL: () => URL.createObjectURL(b),

  toImage: async () => {
    const o = blob(b).toObjectURL()
    return objectURL(o).toImage()
  }
})

export const image = i => ({
  toBlob: async () => objectURL(i.src).toBlob(),

  toDataURL: async () => {
    const b = await image(i).toBlob()
    return blob(b).toDataURL()
  },

  toObjectURL: async () => {
    const b = await image(i).toBlob()
    return blob(b).toObjectURL()
  }
})

export const dataURL = d => ({
  toBlob: () => {
    const arr = d.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new Blob([u8arr], { type: mime })
  },

  toObjectURL: () => {
    const b = dataURL(d).toBlob()
    return blob(b).toObjectURL()
  }
})

export const objectURL = o => ({
  toBlob: async () => new Promise(resolve => {
    const request = new XMLHttpRequest()
    request.open('GET', o, true)
    request.responseType = 'blob'
    request.onload = () => resolve(request.response)
    request.send()
  }),

  toDataURL: async () => {
    const b = await objectURL(o).toBlob()
    return blob(b).toDataURL()
  },

  toImage: async () => new Promise((resolve, reject) => {
    const image = new Image()
    image.error = reject
    image.onload = () => resolve(image)
    image.src = o
  })
})

export default {
  blob,
  image,
  dataURL,
  objectURL
}
