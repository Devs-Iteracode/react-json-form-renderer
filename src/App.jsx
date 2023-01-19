import FormRenderer from "./Components/FormRenderer.jsx";
import {useState} from "react";

function App() {
    const [isFormRendered, setIsFormRendered] = useState(false);

	return (
		<div className="App">
			<main>
				<h1 className="text-center my-5">React JSON form renderer</h1>
				<div className="col-sm-12 col-lg-6 mx-auto p-3 border border-2 mb-5">
					<form method="POST" className="xl">
						<FormRenderer path="./formTemplate.json" isRendered={setIsFormRendered}/>
						<small className="d-block text-danger text-center mt-5"><sup>*</sup>Champs obligatoires</small>
						<button className="btn btn-primary w-100 mt-4" type="submit" disabled={!isFormRendered}>Valider le formulaire</button>
					</form>
				</div>
			</main>
		</div>
	)
}

export default App
