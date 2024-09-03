import "./style.css"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { useEffect, useState } from "react"
import { Button } from "@headlessui/react"
import { addUidAndEmail } from "../../../store/user.actions"

const Header = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const { uidAndEmail } = useAppSelector((state) => state.user)
  const [showDropdown, setShowDropdown] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const detectSize = () => {
    setWindowWidth(window.innerWidth)
    if(window.innerWidth >= 768){
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)

    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowWidth])

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <div className="header">
      <div className="header__title" onClick={() => navigate("/")}>
        Radiance Haven
      </div>
      <div>
        <div className="header__username-mobile">
          {uidAndEmail ? <p>{uidAndEmail.email}</p> : null}
          <div
            style={{ marginBottom: "-10px" }}
            onClick={() => setShowDropdown((prevValue) => !prevValue)}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        {showDropdown || windowWidth >= 768 ? (
          <div className="header__navigation">
            {uidAndEmail ? (
              <>
                <p className="header__username-desktop">{uidAndEmail?.email}</p>
                <Button style={{margin: showDropdown ? "20px 0" : "0"}} onClick={() => dispatch(addUidAndEmail(null))}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {" "}
                <p className="header__sign-in">
                  <Link to={"/sign-in"}>Sign In</Link>
                </p>
                <p>
                  <Link to={"/sign-up"}>Sign Up</Link>
                </p>
              </>
            )}
            <div
              className="header__cart"
              onClick={() => navigate("product-list")}
            >
              <img
                style={{ width: "20px" }}
                src="../../assets/icons/cart.svg"
                alt=""
              />
              {cartItems
                .map((item) => item.items)
                .reduce(
                  (accumulator, currentValue) =>
                    (accumulator ?? 0) + (currentValue ?? 0),
                  0
                )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
