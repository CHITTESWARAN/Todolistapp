import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const itemlist = ({ items, handleCheck, handleliRemove }) => {
  return (
    <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt
                                role="button"
                                onClick={() => handleliRemove(item.id)}
                                tabIndex="0"
                                aria-label={`Delete ${item.item}`}//it the information to a imformation in the a non humans
                            />
                        </li>
                    ))}
                </ul>
  )
}

export default itemlist