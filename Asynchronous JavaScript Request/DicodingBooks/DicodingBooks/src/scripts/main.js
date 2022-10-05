function main() {
    const baseUrl = 'https://masak-apa.tomorisakura.vercel.app';

    const getRecipe = async() => {
        try {
            const response = await fetch(`${baseUrl}/api/recipes`);
            const responseJson = await response.json();
            console.log(response);
            console.log(responseJson);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllRecipes(responseJson.recipes);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    // const insertRecipe = async(recipe) => {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-Auth-Token': '12345'
    //             },
    //             body: JSON.stringify(recipe)
    //         };

    //         const response = await fetch(`${baseUrl}/add`, options);
    //         const responseJson = await response.json();
    //         showResponseMessage(responseJson.message);
    //         getRecipe();
    //     } catch (error) {
    //         showResponseMessage(error);
    //     }
    // };

    // const updateRecipe = async(recipe) => {
    //     try {
    //         const options = {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-Auth-Token': '12345'
    //             },
    //             body: JSON.stringify(recipe)
    //         }

    //         const response = await fetch(`${baseUrl}/edit/${recipe.id}`, options);
    //         const responseJson = await response.json();

    //         showResponseMessage(responseJson.message);
    //         getRecipe();
    //     } catch (error) {
    //         showResponseMessage(error);
    //     }
    // };

    // const removeRecipe = (recipeId) => {
    //     fetch(`${baseUrl}/delete/${recipeId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'X-Auth-Token': '12345'
    //         }
    //     }).then(response => {
    //         return response.json();
    //     }).then(responseJson => {
    //         showResponseMessage(responseJson.message);
    //         getRecipe();
    //     }).catch(error => {
    //         showResponseMessage(error);
    //     });
    // };



    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllRecipes = (recipes) => {
        const listRecipeElement = document.querySelector('#listRecipe');
        listRecipeElement.innerHTML = '';

        recipes.forEach(recipe => {
            listRecipeElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${recipe.url})</h5>
                <p>${recipe.key}</p>
              <button type="button" class="btn btn-danger button-delete" id="${recipe.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
        });

        const buttons = document.querySelectorAll('.button-delete');
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                const recipeId = event.target.id;

                removeRecipe(recipeId);
            });
        });
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {

        const inputRecipeId = document.querySelector('#inputRecipeId');
        const inputRecipeTitle = document.querySelector('#inputRecipeTitle');
        const inputRecipeAuthor = document.querySelector('#inputRecipeAuthor');
        const buttonSave = document.querySelector('#buttonSave');
        const buttonUpdate = document.querySelector('#buttonUpdate');

        buttonSave.addEventListener('click', function() {
            const recipe = {
                id: Number.parseInt(inputRecipeId.value),
                title: inputRecipeTitle.value,
                author: inputRecipeAuthor.value
            };

            insertRecipe(recipe);
        });

        buttonUpdate.addEventListener('click', function() {
            const recipe = {
                id: Number.parseInt(inputRecipeId.value),
                title: inputRecipeTitle.value,
                author: inputRecipeAuthor.value
            };

            updateRecipe(recipe);
        });
        getRecipe();
    });
}

export default main;