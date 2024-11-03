import React, { useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, changeCategory } from "../features/categoriesSlice";

const CategoryList = () => {
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ListGroup>
      <ListGroupItem
        active={!selectedCategory.id}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(changeCategory({}))}
        action
        tag="a"
      >
        All Categories
      </ListGroupItem>
      {categories.map((c, i) => (
        <ListGroupItem
          active={c.id === selectedCategory.id}
          style={{ cursor: "pointer" }}
          action
          tag="a"
          key={i}
          onClick={() => dispatch(changeCategory(c))}
        >
          {c.categoryName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CategoryList;
