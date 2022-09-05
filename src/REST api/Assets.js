import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllAssets = async () => {
  try {
    const assets = await axios.get(apiUrl + "/realestate/");
    return assets.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAssets = async (searchParamsObject) => {
  const urlParams = new URLSearchParams(searchParamsObject);

  try {
    const assets = await axios.get(
      apiUrl + "/realestate/assets?" + urlParams.toString()
    );
    return assets.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const newAsset = async (newAdState) => {
  try {
    const asset = await axios.post(apiUrl + "/realestate/asset", newAdState);
    return asset.data.data;
  } catch (error) {
    console.log(error);
  }
};
