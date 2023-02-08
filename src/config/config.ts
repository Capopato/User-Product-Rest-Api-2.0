import dotenv from "dotenv";

dotenv.config();

const username = process.env.username || "";
const password = process.env.password || "";
const PORT = process.env.port || 3001;
const mongoURI = `mongodb+srv://RestAPIName:${password}@restapidb.i67ryjf.mongodb.net/?retryWrites=true&w=majority`;
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB3US8Ctx7rosLJq+FAFjxT
88ym66DjSnOTVkVrSe7trhDuGoed5H/wye5oK2DsPF+ZtPc0lobeSwdSPLUDnZYZ
px2elwXfPhRJl1lckWTyM/h+tTMG3UdZz7W7xMcK/J2jrm+9kB6kOgF3XoMzpWhA
Jn8xPWu4yqvDrGiD0WoiNKPP4fDUTsoCVw3wt7TqWBBI1p7obdhBQcKSa0r7eo59
DvkyIy/p5e22rzYutXrZbXfurH6S0235jaOtShuoN6UGYXzAWAerI7Ori/m3HlEo
zEuJK0dYvzdWAr7IRMcNeWZd99PjAmjxs9SGurCB+7yaqH/0HR2i3ikYNp44xr3h
AgMBAAE=
-----END PUBLIC KEY-----`;
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQB3US8Ctx7rosLJq+FAFjxT88ym66DjSnOTVkVrSe7trhDuGoed
5H/wye5oK2DsPF+ZtPc0lobeSwdSPLUDnZYZpx2elwXfPhRJl1lckWTyM/h+tTMG
3UdZz7W7xMcK/J2jrm+9kB6kOgF3XoMzpWhAJn8xPWu4yqvDrGiD0WoiNKPP4fDU
TsoCVw3wt7TqWBBI1p7obdhBQcKSa0r7eo59DvkyIy/p5e22rzYutXrZbXfurH6S
0235jaOtShuoN6UGYXzAWAerI7Ori/m3HlEozEuJK0dYvzdWAr7IRMcNeWZd99Pj
Amjxs9SGurCB+7yaqH/0HR2i3ikYNp44xr3hAgMBAAECggEASfXY3iYE1KufcsNI
bSFbY+7L/OwyXrHX0oy3mznJESvE8tMfHZB2fhut3ISHH+iMmgrC8aYdE84OS7u1
uPgGAwDEK3oR+b/Rc4yNqAO4PypX7rMDXk3r3JAUZsAjYXwVe1C1kxuy4rnSDtxX
F7yAUsOKNEuOao22yyQj5RH6aBi+JIP0e3DeyaoPj1ZSYeY0dKcbjWCVN5c/NxXj
/PpkQZsBpL3OzaaEO299fl7n725EnEZronEkXKyJssT09WsVdHJoo+F18iLsE6cE
Por7jAay1qQc9RmUbLACRXYwXK8VLvU9M50tM95UtbaTAqr5rBEVmYHXOSN0BbXM
hMYZAQKBgQDKq+TZOHvXhB2imegMVIoyjbqKVk9UvE8pTtCLUhmtEDK32npesOAQ
N2r0bOkfk2yVSovQdwVxK9uwR1UTPOECAluh1BBoja14SvNGXjPMYIJxq2jZfILo
NvMQRvj4dZoZDITTWgWFUY0XxqdQCeOdfRKvFgi++fgmouRIjB91rQKBgQCWtnop
dXnaOmmoR8A4nYOEOpVF8qKUtZGPZL6SxocWFQtr/m5QsmKdQgqHCemOgQyOSIHT
3Oip7/h9VYfjpyDtoXcaM+d4rWMWB6XCIkXN8E1866E7/l/xHGlsoWgaS9ol6DiL
7FaE8T6USwuO5GUtL94zAZ/o7OO1Xl85+y5nhQKBgGcVo2LxHdxysHgh/Cs5XMl1
2Sm/2L3qwgDqu5wBeFnUYVeuYouDP5Q/+8CzHKgY3iPZNOAlibkUa7tvrNAKKRBS
jrTzHh1v4onK5Y4nIAWWGQMkAkKM2DCwslTXJI+LkYOoIG833JMA9djgC/3j6cgS
88vmUzCACD3uoFpeGypJAoGAO4iZeQcOu0WXtwGgzLxr1y/NB3RxBI00kpAZN6F0
eySU/nPi372Xdsc/oVgpCkGv1ASQREBfJ8HDRr8ijqrWNwgxJAicxu621Vzv/V/M
cy0Zbt8lMa2p+HRgsKiRltGfupmgvKT/CETDk5CRYECYNuFRxJQ/tqLc0CgXNbAj
BIECgYAsY4adGn1e+wwyWGrAYGHfURJB/t/HbMv+FMeBmizFuY6fgNp9ndCHqqxc
hKKAP6BWuTNbYS9oWB625e2tLFojHUrQL8Nd3m75okqu+uPHQexs/GyEQ+Oa7xsx
x8PKEQ1gU+rDB18b47AY2MbcQKytPWzAHbE211295ft2mHk0QQ==
-----END RSA PRIVATE KEY-----`;

export default {
  username,
  password,
  PORT,
  mongoURI,
  publicKey,
  privateKey,
};
