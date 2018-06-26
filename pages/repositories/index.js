import Link from 'next/link'

export default ({ repositories = ['react', 'vue', 'angular'] }) => (
  <div>
    <h1>Repositorios</h1>
    <ul>
      {repositories.map(repository => (
        <li key={repository}>
          <Link 
            href={`/repositories/${repository}`}
            // passHref es requerido si no envuelve una etiqueta
          >
            <a>{repository}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)