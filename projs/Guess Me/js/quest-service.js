var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'questsDB';

function createQuestsTree() {

    var prevTree = loadFromStorage(KEY)
    if (!prevTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    } else {
        gQuestsTree = prevTree
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars //DONE
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    newGuessTxt = newGuessTxt.charAt(0).toUpperCase() + newGuessTxt.slice(1);
    newQuestTxt = newQuestTxt.charAt(0).toUpperCase() + newQuestTxt.slice(1);
    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest
    gPrevQuest[lastRes] = newQuest
    gCurrQuest = gQuestsTree;
    _saveQuestsToStorage()
}

function getCurrQuest() {
    return gCurrQuest
}

function getPrevQuest() {
    return gPrevQuest
}

function _saveQuestsToStorage() {
    saveToStorage(KEY, gQuestsTree)
}
