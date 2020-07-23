"use strict";
module.exports = (src) => {
    let res;
    if (typeof src == "object")
        res = src;
    else
        try {
            JSON.parse(src);
            res = JSON.parse(src);
        }
        catch (e) {
            try {
                res = JSON.parse(JSON.stringify(res));
            }
            catch (e) {
                res = false;
            }
        }
    return res;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Z1bmN0aW9ucy9QYXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsaUJBQVMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUNsQixJQUFJLEdBQVEsQ0FBQztJQUNiLElBQUksT0FBTyxHQUFHLElBQUksUUFBUTtRQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7O1FBQ2pDLElBQUk7WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixJQUFJO2dCQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLEdBQUcsR0FBRyxLQUFLLENBQUM7YUFDaEI7U0FDSDtJQUNELE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmV4cG9ydCA9IChzcmM6IGFueSkgPT4ge1xyXG4gICAgbGV0IHJlczogYW55O1xyXG4gICAgaWYgKHR5cGVvZiBzcmMgPT0gXCJvYmplY3RcIikgcmVzID0gc3JjO1xyXG4gICAgZWxzZSB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2Uoc3JjKTtcclxuICAgICAgICByZXMgPSBKU09OLnBhcnNlKHNyYyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG59OyJdfQ==