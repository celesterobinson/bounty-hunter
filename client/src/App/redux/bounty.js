import axios from "axios";

const bountyReducer = (prevState = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "POST_BOUNTY":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "GET_BOUNTY":
            return {
                loading: false,
                data: action.data
            }
        case "UPDATE_BOUNTY":
            return {
                loading: false,
                data: prevState.data.map((bounty) => {
                    if (bounty._id === action.id) {
                        return action.updatedBounty;
                    } else {
                        return bounty
                    }
                })
            }
        case "DELETE_BOUNTY":
            return {
                loading: false,
                data: prevState.data.filter((bounty) => {
                    return bounty._id !== action.id;
                })
            }
        default:
            return prevState
    }

}
const bountyUrl = `/bounty/`;
export const postBounty = (inputs) => {
    return dispatch => {
        axios.post(bountyUrl, inputs)
            .then((response) => {
                console.log(response)
                let { data } = response;
                dispatch({
                    type: "POST_BOUNTY",
                    data
                })
            })
    }
}

export const getBounty = () => {
    return dispatch => {
        axios.get(bountyUrl)
            .then((response) => {
                let { data } = response;
                dispatch({
                    type: "GET_BOUNTY",
                    data
                })
            })
    }
}

export const updateBounty = (updatedBounty, id) => {
    return dispatch => {
        axios.put(bountyUrl + id, updatedBounty)
            .then((response) => {
                dispatch({
                    type: "UPDATE_BOUNTY",
                    updatedBounty: response.data,
                    id
                })
            })
    }
}

export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete(bountyUrl + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_BOUNTY",
                    id
                })
            })
    }
}
export default bountyReducer;