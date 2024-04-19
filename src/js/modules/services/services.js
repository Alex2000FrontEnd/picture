const postData = async (url, body) => {
    let res = await fetch(url, {
        method: 'POST',
        body: body
    });

    return await res.text();
};

export default postData;