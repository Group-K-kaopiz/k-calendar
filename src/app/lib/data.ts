
const url = process.env.NEXT_PUBLIC_URL_ME;
const bearer_token = process.env.NEXT_PUBLIC_BEARER_TOKEN || '';
const calendar_url = process.env.NEXT_PUBLIC_URL_OWNER_CALENDAR;
const calendar_detail_url = process.env.NEXT_PUBLIC_URL_OWNER_CALENDAR_DETAIL

export async function fetchUserData() {

    try {
        if (!url) {
            throw new Error("URL is not defined");
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': bearer_token
            }
        });
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error(error);
    }
}

export async function fetchOwnerCalendarData(
  month_year: string
){
  try {
    const response = await fetch(calendar_url + month_year, {
      method: "GET",
      headers: {
        Authorization: bearer_token,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchOwnerCalendarDetailData(date : string) {
    try {
        const response = await fetch(calendar_detail_url + date, {
            method: 'GET',
            headers: {
                'Authorization': bearer_token
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}