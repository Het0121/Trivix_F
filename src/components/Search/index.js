import React, { useState } from "react";
import { debounce } from "lodash";
import { Image, Search, Popup, Input, Icon, Grid } from "semantic-ui-react";
import FilterImage from "../../assets/images/filterIcon.svg";
import { theme } from "../../Theme/theme";
import { Button } from "../../shared";
import useWindowSize from "../../hooks/Screen";
import CustomIcon from "../../shared/Icon";

const CustomeSearch = ({
  isLoading,
  value,
  results,
  handleResultSelect = () => {},
  handleSearchChange = () => {},
  filter = true,
}) => {
  const { width } = useWindowSize();

  const Desktop = width <= 1026 ? "none" : "block";
  const Mobile = width > 1024 ? "none" : "block";

  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid>
        <Grid.Row columns={"equal"}>
          <Grid.Column width={16} mobile={6} tablet={6} computer={16}>
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
              <div style={{ display: Desktop }}>
                <Search
                  fluid
                  loading={isLoading}
                  onResultSelect={handleResultSelect}
                  onSearchChange={debounce(handleSearchChange, 500, {
                    leading: true,
                  })}
                  results={results}
                  value={value}
                />
              </div>
              {filter === false ? null : (
                <div
                  style={{
                    background: theme.colors.blue,
                    padding: "7px",
                    borderRadius: "8px",
                    display: Desktop,
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
                    <Image
                      src={FilterImage}
                      size="small"
                      style={{ width: "21px" }}
                    />
                  </Button>
                </div>
              )}

              {/* Mobile: Show only search icon */}
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div style={{ display: Mobile, marginLeft: "-12px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                <CustomIcon
                  name="bell outline"
                  size={"large"}
                  style={{ color: theme.colors.orange }}
                />
                <CustomIcon
                  name="comments outline"
                  size={"large"}
                  style={{ color: theme.colors.orange }}
                />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <Grid>
        <Grid.Row>
          <div style={{ display: Mobile }}>
            <Search
              fluid
              loading={isLoading}
              onResultSelect={handleResultSelect}
              onSearchChange={debounce(handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
            />
          </div>
        </Grid.Row>
      </Grid> */}
    </>
  );
};

export default CustomeSearch;
