export default function Card(props) {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="country-code">
                {props.cc}
              </div>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">{props.country}</p>
            </div>
          </div>

          <div className="content">
            <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
          </div>
        </div>
      </div>
    </div>
  )
}