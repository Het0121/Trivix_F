import React, { useState } from "react";
import { debounce } from "lodash";
import { Image, Search, Popup, Input, Icon } from "semantic-ui-react";
import FilterImage from "../../assets/images/filterIcon.svg";
import { theme } from "../../Theme/theme";
import { Button } from "../../shared";

const CustomeSearch = ({
  isLoading,
  value,
  results,
  handleResultSelect = () => {},
  handleSearchChange = () => {},
  filter = true,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      {/* Desktop & Tablet: Show full search bar */}
      <div className="desktop-search">
        <Search
          fluid
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={debounce(handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
        />
      </div>
      {filter === false ? null : (
        <div
          className="desktop-search"
          style={{
            background: theme.colors.blue,
            padding: "7px",
            borderRadius: "8px",
          }}
        >
          <Button
            style={{
              background: "transparent",
              padding: 0,
              margin: 0,
              alignItems: "center",
              display: "flex",
            }}
          >
            <Image src={FilterImage} size="small" style={{ width: "21px" }} />
          </Button>
        </div>
      )}

      {/* Mobile: Show only search icon */}
      <div className="mobile-search" style={{ display: "none" }}>
        <Popup
          position="top right"
          trigger={
            <Button
              style={{
                background: "transparent",
                padding: 0,
                margin: 0,
                alignItems: "center",
                display: "flex",
              }}
              onClick={() => setOpen(true)}
            >
              <Icon name="search" size="large" color="blue" />
            </Button>
          }
          on="click"
          open={open}
          onClose={() => setOpen(false)}
          content={
            <div style={{ background: "transparent" }}>
              <Input
                icon="search"
                placeholder="Search..."
                value={value}
                onChange={(e) =>
                  handleSearchChange(e, { value: e.target.value })
                }
              />
            </div>
          }
        />
      </div>

      {/* Mobile: Show only filter icon */}
      {filter === false ? null : (
        <div
          className="mobile-filter"
          style={{
            background: theme.colors.blue,
            padding: "7px",
            borderRadius: "8px",
            display: "none",
          }}
        >
          <Button
            style={{
              background: "transparent",
              padding: 0,
              margin: 0,
              alignItems: "center",
              display: "flex",
            }}
          >
            <Image src={FilterImage} size="small" style={{ width: "21px" }} />
          </Button>
        </div>
      )}

      <style>
        {`
          @media (max-width: 767px) {
            .desktop-search {
              display: none !important;
            }
            .mobile-search, .mobile-filter {
              display: flex !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomeSearch;
