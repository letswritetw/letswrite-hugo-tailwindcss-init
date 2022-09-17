module.exports = {
  content: ["./content/**/*.{html,js,md}", "./layouts/**/*.{html,md}", "./layouts_pug/**/*.pug", "./static/js/**.js", "./assets/js/**.js"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "微軟正黑體", "Microsoft JhengHei"]
      },
      colors: {
        main: '#42A6F7',
        mainHover: '#167FFF'
      }
    },
  },
  plugins: [],
}
