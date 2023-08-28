import { useEffect, useRef } from 'react'

export default function Adds() {
  const bannerRef = useRef(null)

  useEffect(() => {
    const atOptions = {
      key: 'f2598a562fafcf083cc47a3cb82e6114',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {},
    }

    if (!bannerRef.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

      if (bannerRef.current) {
        bannerRef.current.append(conf)
        bannerRef.current.append(script)
      }
    }
  }, [])

  return (
    <>
    <div ref={bannerRef}></div>
    </>
  )
}
