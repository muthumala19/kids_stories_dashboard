export default function validator(story) {
    return titleValidator(story['title']) && imageUrlValidator(story['imageUrl']) && categoriesValidator(story['categories']) && complexityValidator(story['complexity']) && paragraphsValidator(story['paragraphs']) && durationValidator(story['duration']);
}

function titleValidator(title) {
    if (title.length === 0) {
        alert("The title cannot be empty!");
        return false;
    }
    return true;
}

function imageUrlValidator(imageUrl) {
    if (imageUrl.length === 0) {
        alert("The imageUrl cannot be empty!");
        return false;
    }
    return true;

}


function categoriesValidator(categories) {
    if (!['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13'].includes(...categories)) {
        alert("invalid categories!");
        return false;
    }
    return true;
}

function complexityValidator(complexity) {
    if (!["Complexity.simple", "Complexity.challenging", "Complexity.hard"].includes(complexity)) {
        alert("complexity must be one of either :\n     Complexity.simple\n     Complexity.challenging\n     Complexity.hard")
        return false;
    }
    return true;
}

function paragraphsValidator(paragraphs) {
    if (paragraphs.length === 0) {
        alert("The paragraphs cannot be empty!");
        return false;
    }
    return true;
}

function durationValidator(duration) {
    if (!parseInt(duration)) {
        alert("duration must be an integer number");
        return false;
    }
    return true;
}
