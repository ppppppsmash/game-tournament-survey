/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        numochi: ['Numochi']
      },
      animation: {
        'jello-horizontal': 'jello-horizontal 0.8s ease both',
        'slide-out-elliptic-top-fwd': 'slide-out-elliptic-top-fwd 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'slide-out-elliptic-top-bck': 'slide-out-elliptic-top-bck 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'slide-out-blurred-top': 'slide-out-blurred-top 0.45s cubic-bezier(0.895, 0.030, 0.685, 0.220)   both',
        'slide-out-blurred-tr': 'slide-out-blurred-tr 0.45s cubic-bezier(0.895, 0.030, 0.685, 0.220)   both',
        'slide-out-blurred-tl': 'slide-out-blurred-tl 0.45s cubic-bezier(0.895, 0.030, 0.685, 0.220)   both',
        'flip-in-hor-bottom': 'flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "bounce-in-left": "bounce-in-left 1.1s ease   both"
      },
      keyframes: {
        'jello-horizontal': {
          '0%, to': {
            transform: 'scale3d(1, 1, 1)'
          },
          '30%': {
            transform: 'scale3d(1.25, .75, 1)'
          },
          '40%': {
            transform: 'scale3d(.75, 1.25, 1)'
          },
          '50%': {
            transform: 'scale3d(1.15, .85, 1)'
          },
          '65%': {
            transform: 'scale3d(.95, 1.05, 1)'
          },
          '75%': {
            transform: 'scale3d(1.05, .95, 1)'
          }
        },
        'slide-out-elliptic-top-fwd': {
          '0%': {
              transform: 'translateY(0) rotateX(0) scale(1)',
              'transform-origin': '50% -500px',
              opacity: '1'
          },
          to: {
              transform: 'translateY(-600px) rotateX(20deg) scale(6)',
              'transform-origin': '50% 200%',
              opacity: '0'
          }
        },
        'slide-out-elliptic-top-bck': {
          '0%': {
              transform: 'translateY(0) rotateX(0) scale(1)',
              'transform-origin': '50% 1400px',
              opacity: '1'
          },
          to: {
              transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
              'transform-origin': '50% 100%',
              opacity: '1'
          }
        },
        'slide-out-blurred-top': {
          '0%': {
              transform: 'translateY(0) scaleY(1) scaleX(1)',
              'transform-origin': '50% 0%',
              filter: 'blur(0)',
              opacity: '1'
          },
          to: {
              transform: 'translateY(-1000px) scaleY(2) scaleX(.2)',
              'transform-origin': '50% 0%',
              filter: 'blur(40px)',
              opacity: '0'
          }
        },
        'slide-out-blurred-tr': {
          '0%': {
              transform: 'translate(0, 0) skew(0deg, 0deg)',
              'transform-origin': '50% 50%',
              filter: 'blur(0)',
              opacity: '1'
          },
          to: {
              transform: 'translate(1000px, -1000px) skew(-80deg, -10deg)',
              'transform-origin': '0% 0%',
              filter: 'blur(40px)',
              opacity: '0'
          }
        },
        'slide-out-blurred-tl': {
          '0%': {
              transform: 'translate(0, 0) skew(0deg, 0deg)',
              'transform-origin': '50% 50%',
              filter: 'blur(0)',
              opacity: '1'
          },
          to: {
              transform: 'translate(-1000px, -1000px) skew(80deg, 10deg)',
              'transform-origin': '100% 0%',
              filter: 'blur(40px)',
              opacity: '0'
          }
        },
        'flip-in-hor-bottom': {
          '0%': {
              transform: 'rotateX(80deg)',
              opacity: '0'
          },
          to: {
              transform: 'rotateX(0)',
              opacity: '1'
          }
        },
        "bounce-in-left": {
          "0%": {
              transform: "translateX(-600px)",
              "animation-timing-function": "ease-in",
              opacity: "0"
          },
          "38%": {
              transform: "translateX(0)",
              "animation-timing-function": "ease-out",
              opacity: "1"
          },
          "55%": {
              transform: "translateX(-68px)",
              "animation-timing-function": "ease-in"
          },
          "72%,90%,to": {
              transform: "translateX(0)",
              "animation-timing-function": "ease-out"
          },
          "81%": {
              transform: "translateX(-28px)",
              "animation-timing-function": "ease-in"
          },
          "95%": {
              transform: "translateX(-8px)",
              "animation-timing-function": "ease-in"
          }
        },
        "scale-in-center": {
          "0%": {
              transform: "scale(0)",
              opacity: "1"
          },
          to: {
              transform: "scale(1)",
              opacity: "1"
          }
        }
      }
    },
  },
  plugins: [],
}

