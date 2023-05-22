import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
		<Head>
		<meta charset="utf-8" />
		<meta name="description" content="Website for multipage form"/>
		<meta name="keywords" content="Frontend Mentor, Multipage form app Landing Page Challenge"/>
		</Head>
      	<body>
    		<Main />
      	  	<NextScript />
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
			integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
			crossorigin="anonymous"></script>
      	</body>
    </Html>
  )
}
