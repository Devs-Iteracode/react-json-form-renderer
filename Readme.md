# React JSON form renderer

## Installation du projet en local

```shell
npm install
```

## Serveur de développement
```shell
npm run dev
```

## Build
```shell
npm run build
```

## Syntaxe du JSON

Les propriétés obligatoires sont : 
- Le premier `title` : permet de définir le titre du formulaire
- `title` : permet de définir le label de l'input
- `name`: permet de connecter le label à l'input
- `type`: permet de définir le type de l'input

Les types pris en charge sont ceux présents dans le HTML natif : [voir la documentation `<input />` Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

Les autres propriétés sont optionnelles, elles correspondent également à celles présentes dans le HTML natif.

### Exemple :
Autre exemple disponible dans le fichier [formTemplate.json](./public/formTemplate.json).

```json
{
  "title": "My form",
  "inputs": [
    {
      "title": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name...",
      "required": true
    },
    {
      "title": "Description",
      "name": "description",
      "type": "textarea",
      "placeholder":"Write your description...",
      "required" : false
    },
    {
      "title": "Number",
      "name": "number",
      "type": "number",
      "placeholder": "Enter your number...",
      "min": 0,
      "max": 10,
      "required": false
    },
    {
      "title": "Image",
      "name": "image-file",
      "type": "file",
      "accept": "image/png, image/jpeg",
      "required": false
    }
  ]
}
```

## Utiliser le composant

Le composant `<FormRenderer />` prends deux attributs : 
- `path` (obligatoire) : corresponds au chemin / url menant au fichier JSON (peut être une URL vers une route API). Il prend un `string`.

- `parameters` (optionnel) : corresponds aux paramètres que vous souhaitez passer au `fetch()` du `path` donné précédemment. Il prend un `object`. [voir la documentation `fetch()` Mozilla](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch).

- `isRendered` (obligatoire) : execute la fonction callback avant et après le rendu du formulaire.

```jsx
const [isFormRendered, setIsFormRendered] = useState(false);

return (
	<FormRenderer path="./formTemplate.json" parameters={...} isRendered={setIsFormRendered} />
)
```