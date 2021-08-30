let loadSharedFuncBtn = document.getElementById('btn-shared-func-loader');

loadSharedFuncBtn.addEventListener('click', async () => {
    let sharedFunctionModule = await import('remoteApp/mySharedFunction');
    sharedFunctionModule.myFunction()
})