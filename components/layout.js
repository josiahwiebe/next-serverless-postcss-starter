export default ({ children }) => (
  <div className='container'>
    {children}
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)
