import {useEffect, useState} from "react";

export default function FormRenderer({path, parameters, isRendered}){
	const [schema, setSchema] = useState(null);

	useEffect(() => {
		isRendered(false);
		fetch(path, parameters)
			.then(res => res.json())
			.then(schema => {
				isRendered(true);
				setSchema(schema);
			});
	}, []);


	return (
		<>
			{ !schema && (
				<div className="d-flex justify-content-center my-5">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
			{ schema && (
				<>
					<h2>{schema.title}</h2>

					{ schema.inputs.map((input, key) => (
						<div className="my-3" key={key}>
							<label className="form-label" htmlFor={input.name}>
								{input.title}
								{input.required && <sup className="text-danger">*</sup>}
							</label>
							{ input.type === 'textarea' ?
								<textarea
									className="form-control"
									id={input.name}
									{...input}
								></textarea> :
								<input
									className="form-control"
									id={input.name}
									{...input}
								/>
							}
						</div>
					))}
				</>
			)}
		</>
	)
}